import Post from "./Post";
import postsInfo from "./postsInfo"
function Posts(){
    return(
        <div>
            <h1 class='latest'>Latest Posts</h1>
            <div class='posts'>
                {postsInfo.map((post) => {
                    return (
                        <Post
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