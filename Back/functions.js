module.exports = {
    calculateAverage: function (arr) {
        var sum = 0
            count=0
        for(var key in arr){
            count++
            sum+= arr[key] 
        }
        return sum/count
    },

    assignTag: function(average){
       if(average < 6)
            return "Danger : élève en naufrage !"
       else if(average >= 6 && average < 12)
            return "Attention : élève en apnée !"
       else if(average >= 12 && average < 14)
            return "Bravo : élève à flot !"
       else
            return "Félicitations : élève  au sec !"
    }
}