
const PageLoadModule = (() => {
let mod = {}
mod.load = () => {
    alert('This is from the module');
    
}
return mod;
})();

export default PageLoadModule;