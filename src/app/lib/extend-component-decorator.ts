export function CustomComponent(annotation: any) {
    return function (target: Function) {
      var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
      var parentAnnotations = Reflect.getMetadata('annotations', parentTarget);
  
      var parentAnnotation = parentAnnotations[0];
      Object.keys(parentAnnotation).forEach(key => {
        if (isPresent(parentAnnotation[key])) {
          // verify is annotation typeof function
          if(typeof annotation[key] === 'function'){
            annotation[key] = annotation[key].call(this, parentAnnotation[key]);
          }else if(
          // force override in annotation base
          !isPresent(annotation[key])
          ){
            annotation[key] = parentAnnotation[key];
          }
        }
      });
  
      var metadata = new Component(annotation);
  
      Reflect.defineMetadata('annotations', [ metadata ], target);
    }
  }