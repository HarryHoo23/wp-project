const areas_type_a = {
  name: 'my-map',
  areas: [
    {
      name: 'A',
      shape: 'rect',
      coords: [610, 138, 697, 232],
      preFillColor: 'pink',
    },
    {
      name: 'A',
      shape: 'rect',
      coords: [784, 138, 865, 232],
      preFillColor: 'pink',
    },
  ],
};

const areas_type_b = {
  name: 'my-map',
  areas: [
    {
      name: 'B',
      shape: 'rect',
      coords: [698, 138, 785, 232],
      preFillColor: 'green',
    },
    {
      name: 'B',
      shape: 'rect',
      coords: [869, 138, 955, 232],
      preFillColor: 'green',
    },
  ],
};

const areas_type_c = {
  name: 'my-map',
  areas: [
    {
      name: 'B',
      shape: 'rect',
      coords: [698, 138, 785, 232],
      preFillColor: 'red',
    },
    {
      name: 'B',
      shape: 'rect',
      coords: [869, 138, 955, 232],
      preFillColor: 'red',
    },
  ],
};

const areas_type_d = {
  name: 'my-map',
  areas: [
    {
      name: 'B',
      shape: 'rect',
      coords: [698, 138, 785, 232],
      preFillColor: 'black',
    },
    {
      name: 'B',
      shape: 'rect',
      coords: [869, 138, 955, 232],
      preFillColor: 'black',
    },
  ],
};
const areas_type_e = {
  name: 'my-map',
  areas: [
    {
      name: 'B',
      shape: 'rect',
      coords: [698, 138, 785, 232],
      preFillColor: 'white',
    },
    {
      name: 'B',
      shape: 'rect',
      coords: [869, 138, 955, 232],
      preFillColor: 'white',
    },
  ],
};

export const areas_maps = [
  areas_type_a,
  areas_type_b,
  areas_type_c,
  areas_type_d,
  areas_type_e,
];

const office_warehouse_maps = {
  name: 'my-map',
  areas: [
    {
      name: 'B',
      shape: 'rect',
      coords: [417, 596, 523, 701],
      fillColor: 'rgba(72,72,72,0.7)',
      preFillColor: 'rgba(72,72,72,0.7)'
    },
    {
      name: 'B',
      shape: 'rect',
      coords: [417, 516, 523, 588],
      fillColor: 'rgba(72,72,72,0.7)',
    },
    {
      name: 'B',
      shape: 'rect',
      coords: [417, 422, 523, 509],
      fillColor: 'rgba(72,72,72,0.7)',
    },
    {
      name: 'B',
      shape: 'rect',
      coords: [417, 328, 523, 416],
      fillColor: 'rgba(72,72,72,0.7)',
    },
    {
      name: 'B',
      shape: 'rect',
      coords: [417, 422, 523, 509],
      fillColor: 'rgba(72,72,72,0.7)',
    },
  ],
};

const office_maps = [
  {
    name: 'my-map',
    areas: [
      {
        name: 'B',
        shape: 'rect',
        coords: [419, 597, 524, 702],
        preFillColor: 'red',
      },
    ],
  },
  {
    name: 'my-map',
    areas: [
      {
        name: 'B',
        shape: 'rect',
        coords: [869, 138, 955, 232],
        preFillColor: 'black',
      },
    ],
  },
];

const hybrid_maps = [
  {
    name: 'my-map',
    areas: [
      {
        name: 'B',
        shape: 'rect',
        coords: [419, 597, 524, 702],
        preFillColor: 'red',
      },
    ],
  },
  {
    name: 'my-map',
    areas: [
      {
        name: 'B',
        shape: 'rect',
        coords: [869, 138, 955, 232],
        preFillColor: 'black',
      },
    ],
  },
];

const roller_doors_maps = [
  {
    name: 'my-map',
    areas: [
      {
        name: 'B',
        shape: 'rect',
        coords: [419, 597, 524, 702],
        preFillColor: 'red',
      },
    ],
  },
  {
    name: 'my-map',
    areas: [
      {
        name: 'B',
        shape: 'rect',
        coords: [869, 138, 955, 232],
        preFillColor: 'black',
      },
    ],
  },
];

const roller_office_maps = [
  {
    name: 'my-map',
    areas: [
      {
        name: 'B',
        shape: 'rect',
        coords: [419, 597, 524, 702],
        preFillColor: 'red',
      },
    ],
  },
  {
    name: 'my-map',
    areas: [
      {
        name: 'B',
        shape: 'rect',
        coords: [869, 138, 955, 232],
        preFillColor: 'black',
      },
    ],
  },
];

export const unit_maps = [
  {
    type: 'office-warehouse',
    data: office_warehouse_maps,
  },
  {
    type: 'office',
    data: office_maps,
  },
  {
    type: 'hybrid',
    data: hybrid_maps,
  },
  {
    type: 'roller-doors',
    data: roller_doors_maps,
  },
  {
    type: 'roller-office',
    data: roller_office_maps,
  },
];
