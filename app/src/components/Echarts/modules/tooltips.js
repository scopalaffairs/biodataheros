export default {
  default: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  bar: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  pie: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  scatter: {
    trigger: 'item',
    axisPointer: {
      type: 'cross',
    },
  },
};

// The template variables are {a}, {b}, {c}, {d} and {e}, which stands for series name, data name and data value and ect. When trigger is set to be 'axis', there may be data from multiple series. In this time, series index can be refered as {a0}, {a1}, or {a2}.

// {a}, {b}, {c}, {d} have different meanings for different series types:

// Line (area) charts, bar (column) charts, K charts: {a} for series name, {b} for category name, {c} for data value, {d} for none;

// Scatter (bubble) charts: {a} for series name, {b} for data name, {c} for data value, {d} for none;

// Map: {a} for series name, {b} for area name, {c} for merging data, {d} for none;

// Pie charts, gauge charts, funnel charts: {a} for series name, {b} for data item name, {c} for data value, {d} for percentage.
