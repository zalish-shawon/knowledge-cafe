
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingtime}) => {
    
    return (
        <div className="md:w-1/3  bg-gray-300 ml-4 mt-3">
            <div>
            <h2 className="text-3xl">Reading Time: {readingtime}</h2>
            </div>
            <h2 className="text-3xl text-center">Bookmark blogs: {bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;