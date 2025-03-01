const proofUser = (req,res) =>{
    return res.status(200).json({
        status:"success",
        message:"destination proof success"
    })
}

export default proofUser;