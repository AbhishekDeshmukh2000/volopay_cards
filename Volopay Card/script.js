
const cards = [
    {
      name: 'Mixmax',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: {
        value: 100,
        currency: "SGD"
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD"
      },
      card_type: "burner",
      expiry: '9 Feb', // Replace with an actual date
      limit: 100,
      status: 'active'
    },
    {
      name: 'Quickbooks',
      budget_name: 'Software subscription',
      owner_id: 2,
      spent: {
        value: 50,
        currency: "SGD"
      },
      available_to_spend: {
        value: 250,
        currency: "SGD"
      },
      card_type: "subscription",
      limit: 10,
      status: 'active'
    }
  ];
  
  // DOM elements
  const yourTab = document.getElementById('your-tab');
  const allTab = document.getElementById('all-tab');
  const blockedTab = document.getElementById('blocked-tab');
  const cardListings = document.getElementById('card-listings');
  
  // Render cards based on selected tab
  function renderCards(tab) {
    // Clear existing cards
    cardListings.innerHTML = '';
  
    // Filter cards based on the tab
    let filteredCards = [];
    switch (tab) {
      case 'your':
        filteredCards = cards.filter(card => card.owner_id === 1); // Replace with actual owner ID
        break;
      case 'all':
        filteredCards = cards;
        break;
      case 'blocked':
        filteredCards = cards.filter(card => card.status === 'blocked');
        break;
      default:
        break;
    }
  
    // Render cards
    filteredCards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      
      const typeIndicator = document.createElement('span');
      typeIndicator.classList.add('type-indicator');
      typeIndicator.textContent = card.card_type.toUpperCase();
      cardElement.appendChild(typeIndicator);
      
      const cardName = document.createElement('h3');
      cardName.textContent = card.name;
      cardElement.appendChild(cardName);
      
      const cardDetails = document.createElement('p');
      if (card.card_type === 'burner') {
        const expiryDate = document.createElement('span');
        expiryDate.classList.add('expiry-date');
        expiryDate.textContent = `Expiry: ${card.expiry}`;
        cardDetails.appendChild(expiryDate);
      } else if (card.card_type === 'subscription') {
        const limit = document.createElement('span');
        limit.classList.add('limit');
        limit.textContent = `Limit: ${card.limit}`;
        cardDetails.appendChild(limit);
      }
      cardElement.appendChild(cardDetails);
      
      cardListings.appendChild(cardElement);
    });
  }
  
  // Event listeners for tab selection
  yourTab.addEventListener('click', () => {
    yourTab.classList.add('active');
    allTab.classList.remove('active');
    blockedTab.classList.remove('active');
    renderCards('your');
  });
  
  allTab.addEventListener('click', () => {
    yourTab.classList.remove('active');
    allTab.classList.add('active');
    blockedTab.classList.remove('active');
    renderCards('all');
  });
  
  blockedTab.addEventListener('click', () => {
    yourTab.classList.remove('active');
    allTab.classList.remove('active');
    blockedTab.classList.add('active');
    renderCards('blocked');
  });
  
  // Initial rendering
  renderCards('your'); // Replace with the desired default tab
  

