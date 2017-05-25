# assignment_react_performance
Bring your own app... make it better


1. "Route > Connect(TradeContainer)"0.3111  --- created a container to pass props  
2. "Connect(TradeContainer) > TradeContainer"0.29 --- created a container to pass props  
3. "TradeContainer > Connect(PurchaseForm)"0.11  
4. "Connect(PurchaseForm) > PurchaseForm"0.1 --- add shouldComponentUpdate return false   
5. "TradeContainer > withRouter(MainPanelContainer)"0.09  --- removed withRouter
6. "withRouter(MainPanelContainer) > Route"0.07  --- removed withRouter
7. "Route > MainPanelContainer"0.05  --- removed withRouter
8. "MainPanelContainer > dropdown"0.03  ---- added shouldComponentUpdate logic to prevent unneeded re-renders    
9. "TradeContainer > Table"0.03 ---- added shouldComponentUpdate logic to prevent unneeded re-renders    
