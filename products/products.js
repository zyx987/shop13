/**
 * Created by rene.ulrich on 07.11.2015.
 */

//var path = require('path');

/** Product Template:
 {
     "id": 0,
     "name": 'name',
     "brand": 'manufacturer',
     "orderNo": 'gibson_123456',
     "price": 0,
     "delivery": 'stock',           // or estimated delivery time in working days: 7
     "category": 'category',        // amps / guitars / effects / accessories
     "subCategory": 'subCategory',  // head / combo / cabinet // electric / western / classical // distortion / phaser / delay / tremolo // cables / pics /
     "short": 'short description',
     "description": 'description',
     "color": null,
     "picUrl": '/some/url/'
 }
 */

module.exports.products = [
    {
        "id": 100,
        "name": "SG Standard Reissue",
        "brand": 'Gibson',
        "orderNo": 'gibson_001',
        "price": 2222,
        "delivery": 'stock',
        "category": 'guitars',
        "subCategory": 'electric',
        "short": 'The SG Standard Reissue stays true to the specs of this iconic instrument.',
        "description": 'The SG Standard Reissue stays true to the specs of this iconic instrument. Its distinct features ' +
        'and legendary tone are meticulously remade with all the precision and accuracy expected from Gibson Custom, ' +
        'including its solid mahogany body with twin cutaways, pointed horns, beveled edges and nickel-plated hardware, ' +
        'including the Maestro vibrato with Lyre-engraved tailpiece plate (lightweight aluminum stopbar tailpiece also ' +
        'available). Other standard appointments include its cellulose trapezoid fingerboard inlays, single-ply binding ' +
        'along the fingerboard and a slim- neck profile. In addition to these details, the SG Standard Reissue also ' +
        'benefits from elements of the Gibson Custom 20th Anniversary Specifications being introduced for 2013-one-piece ' +
        'rosewood fingerboard, Kluson Deluxe machine heads, hot-hide glue neck fit, a Historic Truss Rod assembly with ' +
        'no tubing, accurate fingerboard binding color, new Custom Buckers created in the image of the original PAFs, ' +
        'and period-correct Aniline dye for guitars finished in Faded Cherry.',
        "color": 'Faded Cherry VOS',
        "picUrl": '/pics/guitars_100.jpg'
    },
    {
        "id": 101,
        "name": "Les Paul standard reissue",
        "brand": 'Gibson',
        "orderNo": 'gibson_002',
        "price": 2888,
        "delivery": 'stock',
        "category": 'guitars',
        "subCategory": 'electric',
        "short": 'The Les Paul Standard Reissue stays true to the specs of this iconic instrument.',
        "description": 'none',
        "color": 'Sun burst',
        "picUrl": '/pics/guitars_100.jpg'
    },
    {
        "id": 200,
        "name": "JTM45",
        "brand": 'Marshall',
        "orderNo": 'marshall_001',
        "price": 1999,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'head',
        "short": 'The very first Marshall amp, made back in 1962, was the JTM45.',
        "description": 'The very first Marshall amp, made back in 1962, was the JTM45. It was an instant hit and ' +
        'launched a whole new generation of groundbreaking guitar players and sounds. Since then, connoisseurs of tone ' +
        'have sought out rare original JTM45s from the \'60s. Now they shall seek no more, thanks to this meticulously ' +
        'accurate re-issue. ' +
        'It was GZ34 rectification that was the key to the JTM45\'s sound, and this is a feature painstakingly reproduced ' +
        'in this re-issue. The way the rectifier interacts with the other valves causes subtle harmonics to shift and ' +
        'smoulder beneath every note, producing the unmistakable, original, and much emulated Marshall sound.',
        "color": null,
        "picUrl": '/pics/amps_200.jpg'
    },
    {
        "id": 300,
        "name": "Distortion+",
        "brand": 'MXR',
        "orderNo": 'mxr_300',
        "price": 89.90,
        "delivery": '3-5 days',
        "category": 'effects',
        "subCategory": 'distortion',
        "short": 'This little yellow box is responsible for those great distortion sounds heard on so many classic ' +
        'recordings.',
        "description": 'This little yellow box is responsible for those great distortion sounds heard on so many classic ' +
        'recordings. Set the Distortion control low and crank the Output knob to drive the front end of your amp for cool ' +
        'blues tones, or max out the Distortion knob for classic early \'80s hard rock tone. There still isn\'t any ' +
        'distortion unit on the market that sounds like the Distortion+.',
        "color": null,
        "picUrl": '/pics/effects_300.jpg'
    },
    {
        "id": 301,
        "name": "Phase 90",
        "brand": 'MXR',
        "orderNo": 'mxr_301',
        "price": 109.90,
        "delivery": 'stock',
        "category": 'effects',
        "subCategory": 'phaser',
        "short": 'This device has found its way into many of Eddie Van Halen\'s recordings, adding a shimmery ' +
        'velocity to lead passages or a more dramatic swoosh to muted strumming.',
        "description": 'This device has found its way into many of Eddie Van Halen\'s recordings, adding a shimmery ' +
        'velocity to lead passages or a more dramatic swoosh to muted strumming. Not just for guitars; it works well ' +
        'with bass, keyboards and even vocals. Vary the speed from a subtle, long cycle to a fast, watery warble...and ' +
        'myriad vintage vibrations in between.',
        "color": null,
        "picUrl": '/pics/effects_301.jpg'
    },
    {
        "id": 401,
        "name": "Instrumentenkabel CCI3 PP (3M)",
        "brand": 'Cordial',
        "orderNo": 'cordial_401',
        "price": 29.90,
        "delivery": 'stock',
        "category": 'accessories',
        "subCategory": 'cable',
        "short": 'Jack mono 6.3mm',
        "description": 'Cordial Instrumentenkabel, Jack mono 6.3mm - Jack mono 6.3mm, 3m',
        "color": null,
        "picUrl": '/pics/accessories_401.png'
    }
];