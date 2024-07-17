import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name = "파이썬" pageNum = {300}></Book>
            <Book name = "자바" pageNum = {400}></Book>
            <Book name = "스프링" pageNum = {500}></Book>
        </div>
    );
}

export default Library;