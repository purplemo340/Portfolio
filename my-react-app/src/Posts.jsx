import Post from "./Post";
import postsInfo from "./postsInfo"
function Posts(){
    return(
        <div>
            <h1 className='latest'>Latest Posts</h1>
            <div className='posts'>
                {postsInfo.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            title={post.title}
                            image={post.image}
                            link={post.link}
                        />
                    )
                }
                )}
                
                </div>
        </div>
    )
}
export default Posts