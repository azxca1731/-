import React from 'react';
const PostPrev = ({ postTitle, postSubtitle, writer }) => {
    return (
        <div>
            <div class="post-preview">
                <a href="post.html">
                    <h2 class="post-title">
                        {postTitle}
                    </h2>
                    <h3 class="post-subtitle">
                        {postSubtitle}
                    </h3>
                </a>
                <p class="post-meta">Posted by
                    <a href="/"> {writer} </a>
                    on September 24, 2018</p>
            </div>
            <hr />
        </div>
    )
}
export default PostPrev;