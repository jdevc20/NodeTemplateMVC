let items = []
module.exports = {
    index : function(request,respond){
        let today = new Date();
        let options = { weekday: "long", day: "numeric", month: "long" }
        let day = today.toLocaleDateString("en-us", options)
    
        let objectToPassed = { kindOfDay: day, newListItems: items }
        respond.render("index", objectToPassed);
    },
    indexAddToDo: function(request,respond){
        let item = request.body.newItem
        items.push(item)
        //let objectToPassed = { newListItem: item }
        //res.render('index', objectToPassed)
        //SUMMARY:  When a post req is trigger saved value newItem and redirect to get
        respond.redirect("/")
    }
}