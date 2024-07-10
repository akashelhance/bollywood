export default function ControveryCardComponent({ post }) {

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
    {post.image && (
        <img src={post.image} alt="Post Imagejjfjfjfjf" className="w-full h-64 object-cover object-center" />
    )}
    {post.embedded_code && (
        <div dangerouslySetInnerHTML={{ __html: post.embedded_code }} className="w-full" />
    )}
    <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.heading}</h2>
        {post.text && (
            <p className="text-gray-600">{post.text}</p>
        )}
    </div>
</div>

    );
};
