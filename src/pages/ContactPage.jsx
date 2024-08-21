import React from "react";
import { useParams } from "react-router-dom";

export default function ContactPage() {
    const {id} = useParams()
    return (
        <div>Contact id: {id}</div>
    )
}