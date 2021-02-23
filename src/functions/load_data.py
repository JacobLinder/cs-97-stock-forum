import yfinance as yf

df = yf.download("SPY", start="2020-01-01", end="2020-12-31")
del df['Open']
del df['High']
del df['Low']
del df['Close']
del df['Volume']
df['Price'] = df['Adj Close']
del df['Adj Close']
df.to_csv('SPY.csv')