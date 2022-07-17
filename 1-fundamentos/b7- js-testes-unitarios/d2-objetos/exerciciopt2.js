const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  //"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let deliver = order.order.delivery.deliveryPerson;
    let custumer = order.name;
    let custumerPhone = order.phoneNumber;
    let custumerAddress = Object.values(order.address);
    return console.log(`Olá ${deliver}, entrega para: ${custumer}, Telefone: ${custumerPhone}, R. ${custumerAddress[0]}, Nº: ${custumerAddress[1]}, Ap: ${custumerAddress[2]}`);
  }
  
  customerInfo(order);

  const order2 = {};  
  
  //"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    Object.assign(order2, order);
    order2.name = 'Luiz Silva';
    order2.payment.total = 50;
    let customer = order2.name;
    let pizza = Object.keys(order2.order.pizza);
    let coke = Object.values(order2.order.drinks.coke);
    let paymentValue = Object.values(order2.payment);

    return console.log(`Olá ${customer}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${coke[0]} é R$ ${paymentValue},00.`);
  }
  
  orderModifier(order);