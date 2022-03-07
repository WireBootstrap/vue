
export default function WireConfigDirective(el, binding) {

    const component = el.attributes["wire-component"].value;

    if(!component)
        throw "Missing wire-component attribute on the element";

    const config = binding.value;

    let cmp = wire.ui.Component.create(component);        

    cmp.render(el, config);

  };