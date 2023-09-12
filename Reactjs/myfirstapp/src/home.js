function Home(){
    let ss={
        // internal style
        background:'red',
        color:'green',
        marginTop:'50px',
        fontSize:'30px'
    }
    return(
        <div style={ss}>
            <h1 className="text-center">home</h1>
            {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="image"></img> */}
        </div>
        //  <div>
        //  <h1 className="text-center">Welcome to the Best Movie App</h1>
        //  </div>
    )
}
export default Home