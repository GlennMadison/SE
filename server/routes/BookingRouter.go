package routes

import(
	controller "go-backend/controllers"
	"github.com/gin-gonic/gin"
)

func BookingRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.POST("/order", controller.CreateOrder)
	incomingRoutes.GET("/orders", controller.GetOrders)
	incomingRoutes.DELETE("/order/:id", controller.DeleteOrder)
	incomingRoutes.GET("/order/:id", controller.GetTicketID)
}