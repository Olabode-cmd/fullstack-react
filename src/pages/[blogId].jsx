import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);

   const fetchBlog = async () => {
    console.log("trying to fetch...")
        try {
            const response = await fetch(`https://dummyjson.com/posts/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch post");
            }

            const data = await response.json();
            console.log(data)
            setBlog(data)
        } catch (error) {
            console.error(error)
            setError(error)
        } finally {
            setLoading(false)
        }
   }

   const fetchComments = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/comments`);

            if (!response.ok) {
                throw new Error("Failed to fetch comments");
            }

            const data = await response.json();
            setComments(data.comments);
        } catch (error) {
            console.error(error);
            setError(error);
        }
   }

   useEffect(() => {
        fetchBlog();
       fetchComments();
   }, [id])

    const random = Math.floor(Math.random() * 26) + 1;
    const fiveComments = comments.slice(random, 4 + random);

    return (
        <div className="min-h-screen bg-gray-50">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error.message}</p>}
            
            {blog && (
                <div className="container mx-auto px-4 py-8">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
                    >
                        ← Back to Blog
                    </Link>

                    <article className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={`https://picsum.photos/seed/${id}/400/300`}
                            alt={blog.title}
                            className="w-full h-92 object-cover"
                        />
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {blog.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-6">{blog.title}</h1>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">{blog.body}</p>
                            </div>
                        </div>

                        <h1 className="text-xl text-gray-950 pl-6">Comments</h1>

                        <div className="mt-6 space-y-4 pl-6">
                            {fiveComments.map((comment) => (
                                <div>
                                    <p>{comment.body}</p>
                                    <p>{comment.likes} likes</p>
                                </div>
                            ))}
                        </div>
                    </article>

                </div>
            )}
        </div>
    )
}

export default BlogDetails;