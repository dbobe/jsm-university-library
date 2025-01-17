import { auth, signOut } from "@/auth";
import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import { db } from "@/database/db";
import { and, eq } from "drizzle-orm";
import { books, borrowRecords } from "@/database/schema";

export default async function MyProfile() {
  const session = await auth();

  const borrowedBooks = await db
    .select({
      id: books.id,
      title: books.title,
      author: books.author,
      genre: books.genre,
      rating: books.rating,
      totalCopies: books.totalCopies,
      availableCopies: books.availableCopies,
      description: books.description,
      coverColor: books.coverColor,
      coverUrl: books.coverUrl,
      videoUrl: books.videoUrl,
      summary: books.summary,
      createdAt: books.createdAt,
    })
    .from(borrowRecords)
    .innerJoin(books, eq(borrowRecords.bookId, books.id))
    .where(
      and(
        eq(borrowRecords.userId, session?.user?.id as string),
        eq(borrowRecords.status, "BORROWED"),
      ),
    );

  console.log("🚀 ~ MyProfile ~ borrowedBooks:", borrowedBooks);
  return (
    <>
      <BookList title="Borrowed Books" books={borrowedBooks} />
    </>
  );
}
