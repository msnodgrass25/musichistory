define(function(require) {
//dependencies
    var _ = require("lodash");
    var Q = require("q");
    var $ = require("jquery");
    var Handlebars = require("hbs");
    var bootstrap = require("bootstrap");
    var loadSongs = require("loadSongs");
    var deleteSong = require("deleteSong");
    var populateSongs = require("populateSongs");
    var clearOldSongList = require("clearOldSongList");
    var songKey;
//delete button promise    
    $(document).on("click", ".deleteButton", function(e) {
        songKey = $(this).attr("id");
        console.log("working", songKey);
        deleteSong.removeSong(songKey)
            .then(function() {
                clearOldSongList.clearOldSongs();
            })
            .then(function() {
                populateSongs.getSongs(loadSongs.insertSongstoDOM);
            })
            .fail(function(){
                console.log("error");
            });
    });
});


  