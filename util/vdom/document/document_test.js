require('can/util/vdom/document/document');
require('can/util/fragment');
require('steal-qunit');

QUnit.module("can/util/vdom/document");

test("parsing <-\n>", function(){
	var frag = can.buildFragment("<-\n>", can.simpleDocument);
	equal(frag.firstChild.nodeValue, "<-\n>");
});
