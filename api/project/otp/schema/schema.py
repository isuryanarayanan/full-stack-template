"""
Schema for the otp app
"""

# Graphene imports
import graphene

# Mutations
from otp.schema.mutations.verify_email import ValidateEmail
from otp.schema.mutations.forgot_password import ForgotPassword


class Query(graphene.ObjectType):
    hello = graphene.String(description="A simple greeting")

    def resolve_hello(self, info):
        return "Hello, world!"


class Mutation(graphene.ObjectType):
    """
    # OTP mutations
    - `validateEmail` - Validate an email
    - `forgotPassword` - Reset a forgotten password
    """
    validate_email = ValidateEmail.Field()
    forgot_password = ForgotPassword.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
