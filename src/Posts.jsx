import Post from "./Post";
//import postsInfo from "./postsInfo"
import list from "./list";
function Posts(){
    return(
        <div>
            <div className="center">
            <h2 className='latest'>Projects</h2>
            </div>
            <div className='posts'>
                {list.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            title={post.name}
                            image={`images/${post.media}`}
                            link={`project/${post.id}`}
                        />
                    )
                }
                )}
                
                </div>
        </div>
    )
}
export default Posts