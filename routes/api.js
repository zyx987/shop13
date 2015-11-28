/**
 * Created by rene.ulrich on 30.09.2015.
 */

var express = require('express');
var router = express.Router();
//var data = require("../products/products.js");
var Datastore = require('nedb');
var db = new Datastore({filename: './products/products.db', autoload: true});

//var Product = function (data) {
//    this.id = data.id;
//    this.name = data.name;
//    this.brand = data.brand;
//    this.orderNo = data.orderNo;
//    this.price = data.price;
//    this.delivery = data.delivery;
//    this.category = data.category;
//    this.subCategory = data.subCategory;
//    this.short = data.short;
//    this.description = data.description;
//    this.color = data.color;
//    this.picUrl = data.picUrl;
//};
//
//data.products.forEach(function (product) {
//    db.insert(new Product(product), function (err, newDoc) {});
//});

//db.find({brand: 'Gibson'}, function (err, doc) {
//    console.log(JSON.stringify(doc));
//});

router.get("/products",
    function (req, res) {
        if (req.query.ids) {
            var ids = req.query.ids.split(',');
            var query = [];
            ids.forEach(function (id) {
                query.push({id: Number(id)});
            });
            db.find({$or: query}).sort({id: 1}).exec(function (err, doc) {
                if (doc.length) {
                    res.json(doc);
                } else {
                    res.sendStatus(404);
                }
            });
        } else if (req.query.category) {
            db.find({category: req.query.category}).sort({id: 1}).exec(function (err, doc) {
                if (doc.length) {
                    res.json(doc);
                } else {
                    res.sendStatus(404);
                }
            });
        } else if (req.query.subCategory) {
            db.find({subCategory: req.query.subCategory}).sort({id: 1}).exec(function (err, doc) {
                if (doc.length) {
                    res.json(doc);
                } else {
                    res.sendStatus(404);
                }
            });
        } else if (req.query.brand) {
            db.find({brand: req.query.brand}).sort({id: 1}).exec(function (err, doc) {
                if (doc.length) {
                    res.json(doc);
                } else {
                    res.sendStatus(404);
                }
            });
        } else {
            db.find({}).sort({id: 1}).exec(function (err, doc) {
                if (doc.length) {
                    res.json(doc);
                } else {
                    res.sendStatus(404);
                }
            });
        }
    }
);

router.get("/products/:id",
    function (req, res) {
        db.findOne({id: Number(req.params.id)}, function (err, doc) {
            if (doc) {
                res.json([doc]);
            } else {
                res.sendStatus(404);
            }
        });
    }
);

router.get("/categories",
    function (req, res) {
        // find all categories
        var categories = [];
        var categoryTree = [];
        db.find({}, function (err, doc) {
            doc.forEach(function (product) {
                categories.merge([product.category]);
            });
            categories.forEach(function (category) {
                var entry = {
                    "category": category,
                    "subcategories": []
                };
                categoryTree.push(entry);
            });
            // find all corresponding subcategories:
            categoryTree.forEach(function (entry) {
                doc.forEach(function (product) {
                    if (product.category === entry.category) {
                        entry.subcategories.merge([product.subCategory]);
                    }
                });
            });
            res.send(JSON.stringify(categoryTree));
        });
    }
);

router.get("/brands",
    function (req, res) {
        var brands = [];
        var brandsData = [];
        db.find({}, function (err, doc) {
            doc.forEach(function (product) {
                brands.merge([product.brand]);
            });
            brands.forEach(function (brand) {
                var count = 0;
                doc.forEach(function (product) {
                    if (product.brand === brand) {
                        count++;
                    }
                });
                var entry = {
                    "name": brand,
                    "quantity": count
                };
                brandsData.push(entry);
            });
            res.send(JSON.stringify(brandsData));
        });
    }
);

Array.prototype.merge = function (/* variable number of arrays */) {
    for (var i = 0; i < arguments.length; i++) {
        var array = arguments[i];
        for (var j = 0; j < array.length; j++) {
            if (this.indexOf(array[j]) === -1) {
                this.push(array[j]);
            }
        }
    }
    return this;
};

module.exports = router;

//------------------------------------------------------------------------------
// EOF
//------------------------------------------------------------------------------
