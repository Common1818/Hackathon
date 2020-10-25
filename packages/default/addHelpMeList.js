const { redis } = require('nim')

const main = (params) => {

    let details = JSON.parse(params);

    const typeName = details.type == 'patients' ? 'help_me_list_patients' : 'help_me_list_students';

    if(typeName == 'help_me_list_patients'){
        const { image, type, name, city, hospital, needs, bloodGroup, description, email, phone, whatsapp, instagram} = details

        return redis().rpushAsync(typeName,
           JSON.stringify({
               image,
              type,
              email,
              name,
              city,
              hospital,
              needs,
              bloodGroup,
              description,
              phone,
              whatsapp,
              instagram  
           }) 
        , function(err, reply){
          if(err){
            return {...err};
          }
          return {
              msg: 'Successfully Added',
              ...reply
          }
        });
    }else{
        const {type, image, name, city, problem, school, Class, description, email, phone, whatsapp, instagram} = details

        return redis().rpushAsync(typeName,
           JSON.stringify({
              type,
              email,
              image,
              name,
              city,
              problem,
              school,
              Class,
              description,
              phone,
              whatsapp,
              instagram  
           }) 
        , function(err, reply){
          if(err){
            return {...err};
          }
          return {
              msg: 'Successfully Added',
              ...reply
          }
        });
    }

  
}

exports.main = main