$('.video').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com',

                id: function (url) {
                    var m = url.match(/[?&]v=([^&#]+)/);
                    if (m !== null) {
                        return m[1];
                    }
                    return null;
                },

                src: 'https://www.youtube.com/embed/%id%'
            }
        }
    }
});