function Video(){
    let ss={
        height:'100px',
        widht:'100px'
    }
  return(
    <div>
        <img style={ss} src="//cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="photo"></img>
        <h3 style={{backgroundColor:"red",color:'blue'}}>beautiful picture</h3>
    </div>
  )
}
export default Video;