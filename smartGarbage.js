const smartGarbage = (trash, bins) => {
  
  if (trash === 'waste') {
    bins.waste ++;
  }
  else if (trash == 'recycling') {
    bins.recycling ++;
  }
  else {
    bins.compost ++;
  }
  console.log(bins);
  return bins;

}
//checking
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

