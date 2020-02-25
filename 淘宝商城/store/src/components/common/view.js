const vc = {
	clicked: false,

};
const showNav = function() {
	vc.clicked = !vc.clicked;
}
const getVc = () => vc;

export default {
	getVc, showNav
}