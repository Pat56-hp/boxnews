$((function(){"use strict";var e;$("#post_categories").selectize({plugins:["restore_on_backspace","remove_button"],persist:!1,delimiter:",",maxItems:50,valueField:"id",labelField:"name",searchField:["id","name"],create:!1}),$("#add_feed_post_users").selectize({plugins:["remove_button"],valueField:"id",labelField:"username",searchField:["username"],create:!1,load:function(t,s){if(!t.length)return s();e&&e.abort(),e=$.ajax({url:BuzzyRSSFeeds.url,type:"GET",data:{q:t},error:function(){s()},success:function(e){s(e)}})},onInitialize:function(){BuzzyRSSFeeds.to_user&&(this.addOption(BuzzyRSSFeeds.to_user),this.addItem(BuzzyRSSFeeds.to_user.id))}})}));