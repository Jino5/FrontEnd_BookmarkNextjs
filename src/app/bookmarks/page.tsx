
import { getAllBookmarks } from "@/lib/bookmarkApi";
import { BookmarksResponse } from "@/types";
import Bookmarks from '../components/Bookmarks';
import SearchForm from "../components/SearchForm";

type Props = {
  searchParams: { page: string, query: string }
}

export default async function BookmarkPage(props: Props)  {
  const { page = 1, query = "" } = props.searchParams;
  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks(parseInt(String(page)), query)
  // const { data } = await bookmarksData
  // const bookmarks: BookmarkType[] = data

  const bookmarkRes = await bookmarksData

  return (
    <div>
        <SearchForm />
        <Bookmarks bookmarks={bookmarkRes} />
    </div>
  );
}
