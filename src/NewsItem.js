import React from 'react'

const NewsItem =(props)=>{

  let{title, description,imageUrl,newsUrl,author,date}= props;
  return (
    <div className='my-3'>
      <div className="card">
      <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}<span className='badge bg-secondary'>New</span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By: {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel= "norefferer" href={newsUrl} target="blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem
