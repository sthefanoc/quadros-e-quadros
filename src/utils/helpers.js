export const formatPrice = (number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }

  // return ['all', ...new Set(unique)];
  return [type === 'company' ? 'todos' : 'todas', ...new Set(unique)];
};
