import React from "react";


function Comment(props){
    return (
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
            <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fccimg.hellomarket.com%2Fimages%2F2023%2Fitem%2F01%2F13%2F00%2F5428108_5748269_1.jpg%3Fsize%3Ds6&type=sc960_832" 
            style={styles.image} />
        </div>

        <div style={styles.contentContatiner}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}>{props.comment}</span>
        </div>
      </div>
    );
}

export default Comment;

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        hight: 50,
        borderRadius: 25,
    },
    contentContatiner:{
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText:{
        color: "black",
        fontsize: 16,
        fontWeight: "bold",
    },
    commentText:{
        color: "black",
        fontSize: 16,
    },
};  