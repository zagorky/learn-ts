//complicated topic

type Transaction = {
  apply: (balance: number) => number;
}

type Wallet = {
  balance: number,
  transaction: Transaction[],
}

function applyTransactions(wallet: Wallet): number {
  let newBalance = wallet.balance;
  try {
    for (const transitions of wallet.transaction) {
      const updateBalance = transitions.apply(newBalance)
      if (!isFinite(updateBalance)) {
        throw new Error(`Invalid balance: ${updateBalance}`)
      }
      newBalance = updateBalance

    }
    return newBalance;
  } catch {
    return wallet.balance
  }
}


export {applyTransactions}
