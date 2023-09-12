import PropTypes from 'prop-types'; // ES6
import { BiBookmarks } from 'react-icons/bi';
const Blog = ({ blog, handleAddBookmark }) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog
    return (
        <div className='mb-20'>
            <img className='w-full' src= {cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='w-[60px] my-8' src= {author_img} alt="" />
                    <div>
                        <h3 className=' text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div>
                <span>{reading_time} min read</span>
                <button onClick={() => handleAddBookmark(blog)} className='ml-2 mt-4 text-2xl'><BiBookmarks></BiBookmarks></button>
                </div>
            </div>
            <h2 className='text-4xl'>Title: {title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.protoTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;