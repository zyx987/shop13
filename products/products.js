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
        "description": 'While all 1958-’60 Les Pauls are among the most saught-after electric guitars ever made, the ' +
        '\'59 Burst is often considered among aficonados to be the crème de la crème of the range. They are also ' +
        'exceedingly rare, with only 635 guitars shipped that year. With sales of the Les Paul declining every year ' +
        'since 1953, the year after its release, Gibson decided in 1958 to update the look of the model with an elegant ' +
        'Cherry Sunburst finish. Guitars from that first year of the Burst’s production often had relatively plain ' +
        'maple tops, but through the course of 1959, Gibson’s craftsmen built Les Pauls with tops that displayed more ' +
        'and more highly-figured grains, making these among the most collectible of the breed today. The 1959 Les Paul ' +
        'Standard Reissue from Gibson Custom accurately recreates the original hallowed ’59 Burst in every detail, and ' +
        'presents it in your choice of VOS finishes: Bourbon Burst, Faded Tobacco Burst, Iced Tea Burst, Lemon Burst, ' +
        'Sunrise Tea Burst and Washed Cherry Sunburst. Gloss: Bourbon Burst, Faded Tobacco Burst, Iced Tea Burst, ' +
        'Lemon Burst, Sunrise Tea Burst and Washed Cherry Sunburst.',
        "color": 'Lemon burst',
        "picUrl": '/pics/guitars_101.jpg'
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
        "delivery": '3-5',
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
    },
    {
        "id": 102,
        "name": "Classic Player Baja Tele",
        "brand": 'Fender',
        "orderNo": 'fender_102',
        "price": 899.00,
        "delivery": 'stock',
        "category": 'guitars',
        "subCategory": 'electric',
        "short": 'Fender Classic Player Baja Telecaster MN Blonde, electric guitar, Classic series, ash body',
        "description": 'Fender Classic Player Baja Telecaster MN Blonde, electric guitar, Classic series, ash body, ' +
        '1 piece maple neck, soft \'V\' shape, 21 medium jumbo frets, 1x custom shop \'Twisted\' ' +
        'Tele single-coil pick-up (neck), 1x custom shop Broadcaster single-coil pick-up (bridge), 4 position blade ' +
        'switch and 2 position push/push S-1 switch, 1-ply black pickguard, scale: 25.5" (648mm), nut width: 1.625" ' +
        '(41.2mm), incl. deluxe gigbag, colour blonde.',
        "color": 'Blonde',
        "picUrl": '/pics/guitars_102.jpg'
    },
    {
        "id": 103,
        "name": "60s Classic Player Strat",
        "brand": 'Fender',
        "orderNo": 'fender_103',
        "price": 1099.00,
        "delivery": 'stock',
        "category": 'guitars',
        "subCategory": 'electric',
        "short": 'Fender 60s Classic Player Stratocaster RW - Classic series with alder body',
        "description": 'Fender 60s Classic Player Stratocaster RW - Classic series with alder body, soft \'C\'' +
        ' shape maple neck, rosewood fingerboard with 21 medium jumbo frets, 3x Custom \'69 single coil ' +
        'Strat pick-ups, Vintage style 2-point synchronized tremolo, 3-ply mint green pickguard, 25.5" (648mm) scale, ' +
        '1.650" (42mm) nut width, includes deluxe gig bag. Colour: 3 Tone Sunburst.',
        "color": '3 Tone Sunburst',
        "picUrl": '/pics/guitars_103.jpg'
    },
    {
        "id": 110,
        "name": "D-28",
        "brand": 'Martin',
        "orderNo": 'martin_110',
        "price": 2499.00,
        "delivery": 'stock',
        "category": 'guitars',
        "subCategory": 'acoustic',
        "short": 'Martin Guitars D-28 western guitar - solid sitka spruce top',
        "description": 'Martin Guitars D-28 western guitar - solid sitka spruce top, solid East Indian rosewood ' +
        'back & sides, solid low profile mahogany neck, nut width 4,3cm, solid black ebony fingerboard, 20 frets ' +
        '(14 clear), solid black ebony bridge, polished gloss finish, includes hardshell case.',
        "color": 'polished gloss finish',
        "picUrl": '/pics/guitars_110.jpg'
    },
    {
        "id": 111,
        "name": "Ron Emory Loyalty VSB",
        "brand": 'Fender',
        "orderNo": 'fender_111',
        "price": 467.00,
        "delivery": '12',
        "category": 'guitars',
        "subCategory": 'acoustic',
        "short": 'Fender Ron Emory Loyalty VS acoustc steel guitar, artist design, slope shoulder dreadnought',
        "description": 'Fender Ron Emory Loyalty VS acoustc steel guitar, artist design, slope shoulder dreadnought, ' +
        'laminated spruce top, back and  sides laminated mahogany, quartersawn scalloped X bracing, ' +
        'herringbone rosette and body binding, mahogany neck, rosewood fretboard, soft V neck shape, 20 frets, ' +
        'nut width 41,3mm, scale 643mm, white diamond shaped inlays, fishman ssys III pickupsystem with built in ' +
        'tuner, tortoise shell pickguard, 70\'s  headstock shape, finish vintage sunburst.',
        "color": 'vintage sunburst',
        "picUrl": '/pics/guitars_111.jpg'
    },
    {
        "id": 112,
        "name": "AW70ECE-BK",
        "brand": 'Ibanez',
        "orderNo": 'ibanez_112',
        "price": 321.00,
        "delivery": '5',
        "category": 'guitars',
        "subCategory": 'acoustic',
        "short": 'Ibanez AW70ECE-BK, acoustic steel string guitar, dreadnought-style',
        "description": 'Ibanez AW70ECE-BK, acoustic steel string guitar, dreadnought-style, Artcore-series, solid ' +
        'spruce top with rosewood binding, mahogany neck, 648 mm  scale, rosewood fretboard, 20 frets, ' +
        'Ivorex II nut and saddle, 43 mm nut width, black-white Multi rosette, Ibanez Chrome Die Cast tuners, ' +
        'Ibanez Under Saddle pickup, Ibanez SPT preamp with built-in tuner, XLR and jack output, colour: black',
        "color": 'black',
        "picUrl": '/pics/guitars_112.jpg'
    },
    {
        "id": 201,
        "name": "Profiling Amp Head BK Set",
        "brand": 'Kemper',
        "orderNo": 'kemper_201',
        "price": 1998.00,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'head',
        "short": 'Kemper Profiling Amplifier Head BK + Remote Control, the Kemper profiling technology allows you to ' +
        'take a precise  sound snapshot of an existing amplifier setup',
        "description": 'Kemper Profiling Amplifier Head BK + Remote Control, the Kemper profiling technology allows ' +
        'you to take a precise  sound snapshot of an existing amplifier setup including speaker cabinet & ' +
        'microphone(s). This snapshot can then be modified even far beyond the amps original possibilities by the ' +
        'internal processors such as multiple stomp effect emulations (up to 4 simultaneously), master effects, ' +
        'equalizer, gain,  amp definition, power sagging etc. The Kemper Profiling Amplifier is already ' +
        'delivered with several painstaking amp profiles on board so you don\'t necessarily have to make your own ' +
        'profiles. It is now possible for the first time to take a precise snapshot of  your own amplifier ' +
        'sound, modify it (if desired) and use it for practice, in the studio or on stage without carrying heavy ' +
        'equipment. Connections: Mic input, line In, alternative input, direct out, monitor out, master out (jack &' +
        ' XLR), S/PDIF digital input and output,  midi in/out/thru, 2 x footswitch (jack), network & USB, ' +
        'dimensions whd: 396 x 214 x 165 mm, weight: 5,4 kg, colour: black, incl. Remote Control',
        "color": 'black',
        "picUrl": '/pics/amps_201.jpg'
    },
    {
        "id": 202,
        "name": "JVM410H",
        "brand": 'Marshall',
        "orderNo": 'marshall_202',
        "price": 1459.00,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'head',
        "short": 'Marshall JVM410H guitar amp head - 100 Watt, 4 channel tube amp with 12 sounds switchable',
        "description": 'Marshall JVM410H guitar amp head - 100 Watt, 4 channel tube amp with 12 sounds switchable ' +
        'by footswitch or MIDI. Programmable effects loop with hardware bypass, digital reverb, insert loop ' +
        'with hardware bypass, emulated DI out, MIDI in and MIDI thru. 5x ECC83 and 4x EL34 valves. Includes ' +
        'footswitch. Dimensions: 750 x 310 x 215mm. Weight: 22kg, dust cover optional',
        "color": 'black',
        "picUrl": '/pics/amps_202.jpg'
    },
    {
        "id": 203,
        "name": "JCA22H Guitar Head",
        "brand": 'Jet City Amplification',
        "orderNo": 'jetcity_203',
        "price": 459.00,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'head',
        "short": 'Jet City Amplification JCA22H Guitar Head guitar head, 5 x 12AX7 and 2x EL84 tubes, 20 Watt class AB',
        "description": 'Jet City Amplification JCA22H Guitar Head guitar head, 5 x 12AX7 and 2x EL84 tubes, 20 Watt ' +
        'class AB @ 16 Ohms or 2x 8 Ohms, footswitchable 2 channel, control for crunch & overdrive preamp, ' +
        'bass, middle, treble, crunch & overdrive master, presence; serielle effect loop, incl. footswitch, ' +
        'dimension W/H/ D 495 x 229 x 229mm, weight 10 kg',
        "color": 'black',
        "picUrl": '/pics/amps_203.jpg'
    },
    {
        "id": 204,
        "name": "Hot Rod Deluxe III",
        "brand": 'Fender',
        "orderNo": 'fender_204',
        "price": 888.00,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'combo',
        "short": 'Fender Hot Rod Deluxe III Electric Guitar Combo - valve, 3x 12AX7 & 2x 6L6, 40W',
        "description": 'Fender Hot Rod Deluxe III Electric Guitar Combo - valve, 3x 12AX7 & 2x 6L6, 40W, 1x 12" ' +
        'Celestion  G12P-80 8 Ohms speaker, 3 channels (normal, drive, more drive), external speaker out, ' +
        'FX loop. Controls: volume, reverb, master, mid, bass, treble, presence, drive select switch, drive volume, ' +
        'bright switch. Includes 2-button footswitch and amp cover. Dimensions: 47.6 x 59.7 x 26.7cm (H  x W x ' +
        'D). Weight: 20.4kg',
        "color": 'black',
        "picUrl": '/pics/amps_204.jpg'
    },
    {
        "id": 205,
        "name": "AC30",
        "brand": 'Vox',
        "orderNo": 'vox_205',
        "price": 2199.00,
        "delivery": '3',
        "category": 'amps',
        "subCategory": 'combo',
        "short": 'Vox AC30 C2X Blue Bulldog, electric guitar full-tube combo - 30W',
        "description": 'Vox AC30 C2X Blue Bulldog, electric guitar full-tube combo - 30watts, 3x 12AX7 (ECC83) ' +
        'preamp valves, 4 x EL84  poweramp valves 2x 12 Celestion "Blue Bulldog" AlNiCo speaker, 4 Inputs ' +
        'High & Low (Top Boost & Normal), control for Normal Volume, Top Boost Volume, Treble, Bass, Reverb-Effect ' +
        'Tone, Level, Tremolo Speed & Depth, Tone Cut, Master Volume, Backside Output for external Cabinet ' +
        '(Extension & External), FX send FX Return, Switch for 8/16 Ohms, Footswitch input (Tremolo and Reverb), ' +
        'Dimensions: 702 x 265 x 556 mm (HxWxD), weight: 33,4kg, footswitch not included (optional footswitch 165749 ' +
        'VOX VFS2 or 198735 LEAD FOOT FS-2)',
        "color": 'red/black',
        "picUrl": '/pics/amps_205.jpg'
    },
    {
        "id": 206,
        "name": "DSL15C",
        "brand": 'Marshall',
        "orderNo": 'marshall_206',
        "price": 498.00,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'combo',
        "short": 'Marshall DSL15C guitar combo - 15W (switchable to 7,5), 12" Celestion custom speaker',
        "description": 'Marshall DSL15C guitar combo - 15W (switchable to 7,5), 12" Celestion custom speaker, ' +
        'tubes: preamp 3x ECC83 poweamp  1x ECC83 & 2x 6V6, 2 channels: classic gain & ultra gain, ' +
        'independant volume & gain controls for both channels, classic tone control with bass, middle & treble ' +
        'controls, presence controls, tone shift switching, deep switch, pentode/triode switch, speaker outputs: ' +
        '4,8 and 16 Ohms, incl. footswitch (channel select and reverb on/off), weight: ca. 16,8 kg, ' +
        'dimensions (w x h x d): 50,5 x 47,5 x 25,5 cm',
        "color": 'gold/black',
        "picUrl": '/pics/amps_206.jpg'
    },
    {
        "id": 207,
        "name": "MR1960 A",
        "brand": 'Marshall',
        "orderNo": 'marshall_207',
        "price": 777.00,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'cabinet',
        "short": 'Marshall MR1960A guitar cabinet - 4x 12" angled cabinet',
        "description": 'Marshall MR1960A guitar cabinet - 4x 12" angled cabinet, Celestion G12T-75 16 ohms, 300watts ' +
        '(mono 4/16ohm, stereo 2x 8ohm). Dimensions: 760 x 830 x 360mm, weight: 36.4kg, incl. speakercable',
        "color": 'gold/black',
        "picUrl": '/pics/amps_207.jpg'
    },
    {
        "id": 208,
        "name": "MR1960BHW",
        "brand": 'Marshall',
        "orderNo": 'marshall_208',
        "price": 878.00,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'cabinet',
        "short": 'Marshall MR1960BHW Straight Guitar Cabinet - handwired reissue cabinet, 4x 12"',
        "description": 'Marshall MR1960BHW Straight Guitar Cabinet - handwired reissue cabinet, 4x 12" Celestion ' +
        'G12H30 speakers, 120W/16 Ohms, brown basket weave grille, small gold logo, includes castors and ' +
        'speaker cable. Dimensions: 760 x 830 x 360mm. Weight: 38.2kg',
        "color": 'silver/black',
        "picUrl": '/pics/amps_208.jpg'
    },
    {
        "id": 209,
        "name": "24S+",
        "brand": 'Jet City Amplification',
        "orderNo": 'jetcity_209',
        "price": 278.00,
        "delivery": 'stock',
        "category": 'amps',
        "subCategory": 'cabinet',
        "short": 'Jet City Amplification 24S+ - 2x 12" extension cabinet with custom Eminence speaker',
        "description": 'Jet City Amplification 24S+ - 2x 12" extension cabinet with custom Eminence speaker, 2x ' +
        '100W/16 Ohms stereo, 1x 140W/8 Ohms mono, rugged hardwood fine ply cabinet construction, 1x 1/4" ' +
        'jack input, jet direct output for frequency corrected output, dimensions: 510x710x300mm (WxHxD), weight: ' +
        '18.28kg, made in China',
        "color": 'black',
        "picUrl": '/pics/amps_209.jpg'
    },
    {
        "id": 302,
        "name": "PH-3",
        "brand": 'Boss',
        "orderNo": 'boss_302',
        "price": 67.00,
        "delivery": 'stock',
        "category": 'effects',
        "subCategory": 'phaser',
        "short": 'Boss PH-3 – phase shifter pedal',
        "description": 'The BOSS PH-3 Phase Shifter pedal provides a wealth of vintage and modern phasing effects, ' +
        'including new "Rise" and "Fall" modes for unique, unidirectional phasing. Syncing these phasing effects is ' +
        'as simple as tapping the pedal to the desired tempo, while an optional expression pedal provides realtime ' +
        'control of the PH-3\'s Rate, Filter and Tempo.',
        "color": 'black',
        "picUrl": '/pics/effects_302.jpg'
    },
    {
        "id": 303,
        "name": "TS808",
        "brand": 'Ibanez',
        "orderNo": 'ibanez_303',
        "price": 89.00,
        "delivery": 'stock',
        "category": 'effects',
        "subCategory": 'overdrive',
        "short": 'Ibanez TS808 the original tube Screamer - looks and sounds just like the original',
        "description": 'Ibanez TS808 the original tube Screamer - looks and sounds just like the original. Controls: ' +
        'overdrive, tone and level, power by 9V battery (included) or by optional power supply (# 108096) AND SPECIAL ' +
        'ADAPTER (# 113733)',
        "color": 'green',
        "picUrl": '/pics/effects_303.jpg'
    },
    {
        "id": 304,
        "name": "OCD",
        "brand": 'Fulltone',
        "orderNo": 'fulltone_304',
        "price": 129.00,
        "delivery": 'stock',
        "category": 'effects',
        "subCategory": 'overdrive',
        "short": 'Fulltone OCD effects pedal for electric guitar',
        "description": 'Fulltone OCD effects pedal for electric guitar - overdrive, "Obsessive Compulsive Drive" ' +
        '(OCD), volume, drive, tone, mini-toggle switch,  handmade in USA',
        "color": 'white',
        "picUrl": '/pics/effects_304.jpg'
    },
    {
        "id": 305,
        "name": "Little Big Muff",
        "brand": 'Electro Harmonix',
        "orderNo": 'ehx_305',
        "price": 109.90,
        "delivery": 'stock',
        "category": 'effects',
        "subCategory": 'distortion',
        "short": 'Electro Harmonix Little Big Muff, distortion/sustainer',
        "description": 'Electro Harmonix Little Big Muff, distortion/sustainer - rich, creamy violin-like sustain. ' +
        'Fat fuzz sound comparable to Jimi Hendrix,  Santana or Pink Floyd, power supply not included ' +
        '(optional 109004)',
        "color": 'silver',
        "picUrl": '/pics/effects_305.jpg'
    },
    {
        "id": 306,
        "name": "DD-7",
        "brand": 'Boss',
        "orderNo": 'boss_306',
        "price": 109.90,
        "delivery": '4',
        "category": 'effects',
        "subCategory": 'delay',
        "short": 'Boss DD-7 Delay Pedal – 6.4 second delay time, 40 second loop function',
        "description": 'Boss DD-7 Delay Pedal – 6.4 second delay time, 40 second loop function, modulation-echo with ' +
        'chorus, modelling of the classic DM-2 unit, tap tempo with optional foot pedal or continuous adjust ' +
        'by optional expression pedal, stereo in/out, optional power supply available (order code 108096).',
        "color": 'silver',
        "picUrl": '/pics/effects_306.jpg'
    },
    {
        "id": 307,
        "name": "Deluxe Memory Man",
        "brand": 'Electro Harmonix',
        "orderNo": 'ehx_307',
        "price": 189.90,
        "delivery": 'stock',
        "category": 'effects',
        "subCategory": 'delay',
        "short": 'Electro Harmonix Deluxe Memory Man - warm analog delay up to 550 milliseconds',
        "description": 'Electro Harmonix Deluxe Memory Man - warm analog delay up to 550 milliseconds, chorus and ' +
        'vibrato, true bypass, creates sweeping sounds, incl. power supply 24DC-100',
        "color": 'silver',
        "picUrl": '/pics/effects_307.jpg'
    }
];