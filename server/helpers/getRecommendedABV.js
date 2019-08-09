function countABV(emotion){
    if (emotion == 'Excited'){
        return 4
    } else if(emotion =='Bored'){
        return 7
    } else if (emotion == 'Happy'){
        return 2
    } else if (emotion == 'Angry'){
        return 10
    } else {
        return 2
    }
}

module.exports = countABV