import { Link } from 'react-router-dom'

const BlogPost = (props) => {
    return (
        <>
            <Link to={`/posts/${props.id}`} className="w-full rounded-md">
                <img src={props.image} alt="Blog post image" className="w-full h-48 object-cover" />

                <div className="content">
                    <h1 className="font-bold text-2xl text-gray-950 mb-2">{props.title}</h1>
                    <p className="text-gray-700 mb-4">{props.description}</p>

                    <div className="flex gap-x-3 items-center">
                        {props.tags.map((tag) => (
                            <span key={tag} className="bg-gray-200 capitalize text-gray-700 px-2 py-1 rounded-full text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BlogPost;