(function(_ds){var window=this;var BU=function(){return"devsite-a11y-announce"},CU=async function(a,b){_ds.yj(a)===b&&(_ds.rj(a,""),await _ds.Ek(),await _ds.Ek());_ds.rj(a,b)},DU=class extends _ds.D{constructor(){super();this.eventHandler=new _ds.F}connectedCallback(){this.setAttribute("aria-live","assertive");this.setAttribute("aria-atomic","true");this.eventHandler.listen(document.body,"devsite-a11y-announce",a=>{a=a.Ga;(a=a.detail&&a.detail.message)&&CU(this,a)})}disconnectedCallback(){_ds.H(this.eventHandler)}};
DU.prototype.connectedCallback=DU.prototype.connectedCallback;DU.getTagName=BU;try{window.customElements.define(BU(),DU)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteA11yAnnounce",a)};})(_ds_www);