


let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character);
    res.json(myFavorites);
} 

const deleteFav = (req, res) => {
    const id = req.params.id;
    // const {id} = req.params;
    // quedate con todos los id q sean disitntos a los id q me pasan por params
    myFavorites = myFavorites.filter(character => character.id !== +id);
   return res.status(200).json(myFavorites)
    // res.json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
};