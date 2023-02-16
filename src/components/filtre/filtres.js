

 const filters = {
    price: [
      { value: '0', label: '10.000 XAF - 20.000 XAF', checked: false },
      { value: '25', label: '20.000 XAF - 30.000 XAF', checked: false },
      { value: '50', label: '30.000 XAF - 40.000 XAF', checked: false },
      { value: '75', label: '40.000 XAF - 50.000 XAF', checked: false },
      { value: '75', label: '50.000 XAF - 60.000 XAF', checked: false },
      { value: '75', label: '70.000 XAF - 80.000 XAF', checked: false },
    ],
    color: [
      { value: 'white', label: 'Douala', checked: false },
      { value: 'beige', label: 'Yaoundé', checked: false },
      { value: 'blue', label: 'Kribi', checked: true },
      { value: 'brown', label: 'Limbé', checked: false },
      { value: 'green', label: 'Bua', checked: false },
      { value: 'purple', label: 'Bafoussam', checked: false },
    ],
    size: [
      { value: 'xs', label: '1', checked: false },
      { value: 's', label: '2', checked: true },
      { value: 'm', label: '3', checked: false },
      { value: 'l', label: '4', checked: false },
      { value: 'xl', label: '5', checked: false },
     
    ],
    category: [
      { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: false },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
    ],
  }

  export default filters;