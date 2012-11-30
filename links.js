$(function(){

    /*-------------------------------------------------
    | autore: Mauro marano
    | sito web: mauromarano.it
    | contatti: http://www.mauromarano.it/contact.php
    | Per favore contattatmi per qualsiasi bug!
    |------------------------------------------------*/

    // imposta qua lo stile css che vuoi applicare ai link
    var css = "style=\"color:blue; text-decoration:underline;\"";

    list = $('td.testo').each(function() {
        var self = $(this);
        var fixed = self.html().replace(/&lt;a href=\"(.+)\"&gt;(.+)&lt;\/a&gt;/m, function(uno, due, tre) {
            return '<a href=\"' + due + '\" ' + css + '>' + tre + '</a>';
        });
        self.html(fixed);

        var fixed_due = self.html().replace(/\[(.+)\]\((.+)\)/m, function(uno, due, tre){
            return '<a href=\"'+ tre +'\" ' + css + '>'+ due +'</a>';
        });
        self.html(fixed_due);
    });
});