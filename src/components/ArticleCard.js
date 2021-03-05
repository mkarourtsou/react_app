import React, {Fragment} from 'react';
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import {Link} from "react-router-dom";

const ArticleCard = ({article}) => {
    const coverImage = article.cover_image!= null ? article.cover_image : '';

    return (
        <Fragment>
            <article>
                <div className="article-img">
                    <Image src={coverImage} fluid />
                </div>
                <div className="text-center">
                    <Badge variant="primary">{article.tag_list[0] }</Badge>
                    <h2><Link to={`/post/${article.id}`}>{article.title}</Link></h2>
                    <div className="d-flex justify-content-center">
                        <div className="author">{article.user.username}</div>
                        <div className="date"><i className="far fa-calendar-alt"></i>{article.readable_publish_date}</div>
                        <div className="comments"><i className="fas fa-comments"></i>{article.comments_count}</div>
                        <div className="likes"><i className="far fa-eye"></i>{article.public_reactions_count}</div>
                    </div>

                    <p>{article.description}</p>
                </div>

            </article>
        </Fragment>

)}


export default ArticleCard;
