document.getElementById('wallet-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const walletAddress = document.getElementById('wallet-address').value.trim();
  const rpcUrl = 'https://mainnet.helius-rpc.com/?api-key=6b52d42b-5d24-4841-a093-02b0d2cc9fc0';  // Replace with your actual custom RPC URL
  const connection = new solanaWeb3.Connection(rpcUrl);

  async function updateBalance() {
      try {
          const publicKey = new solanaWeb3.PublicKey(walletAddress);
          const balance = await connection.getBalance(publicKey);
          const solBalance = balance / solanaWeb3.LAMPORTS_PER_SOL;
          document.getElementById('balance-amount').textContent = solBalance;
      } catch (error) {
          console.error('Error fetching balance:', error);
      }
  }

  // Update balance every 5 seconds
  updateBalance();
  setInterval(updateBalance, 5000);
});
