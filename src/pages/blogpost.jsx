import { useState, useEffect } from 'react';
import BlogPost from '../components/blogpost';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/posts');
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }

            const data = await response.json();
            setPosts(data.posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setError(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div className="max-w-7xl mx-auto min-h-screen px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
            <p className="text-gray-700 mb-8">Explore our latest blog posts on various topics.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    posts.map((post, index) => (
                        <BlogPost 
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.body}
                            image={`https://picsum.photos/seed/${post.id}/400/300`}
                            tags={post.tags || []}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogPage;