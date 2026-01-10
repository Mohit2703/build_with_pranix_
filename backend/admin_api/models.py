# admin_api/models.py
from django.db import models


class Settings(models.Model):
    """
    Singleton model for storing admin settings (feature flags and branding).
    """
    # Feature Flags
    ai_questions_enabled = models.BooleanField(default=True)
    voice_input_enabled = models.BooleanField(default=False)
    report_regeneration_enabled = models.BooleanField(default=True)
    
    # Branding
    primary_color = models.CharField(max_length=20, default="#4f46e5")
    accent_color = models.CharField(max_length=20, default="#10b981")
    
    # AI Prompts
    question_generation_prompt = models.TextField(
        blank=True,
        default="""You are an AI assistant for getting the project requirements from the client.
Following are the predefined and AI asked questions along with their answers (if available).
Please ask relevant questions to get the complete requirements from the client based on the below questions and answers if any are missing.
Please provide only the list of questions semicolon separated that need to be asked to the client to get the complete project requirements. Do not include any other text."""
    )
    
    requirement_generation_prompt = models.TextField(
        blank=True,
        default="""You are an AI assistant for generating project requirements in HTML format that should be visually stunning. Include:
• Project overview
• Detailed functional requirements
• Technical requirements
• User stories
• Acceptance criteria
• Wireframe descriptions (text)
• Database schema suggestions
• API endpoint list

Excludes:
• User flow diagrams
• Timeline
• Costing

Based on the client's answers to the questions asked, please generate a comprehensive project requirement to be presented to the client."""
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Settings"
        verbose_name_plural = "Settings"

    def save(self, *args, **kwargs):
        # Ensure only one settings instance exists
        if not self.pk and Settings.objects.exists():
            raise ValueError("Only one Settings instance is allowed.")
        return super().save(*args, **kwargs)

    @classmethod
    def get_settings(cls):
        """Get or create the singleton settings instance."""
        settings, _ = cls.objects.get_or_create(pk=1)
        return settings

    def __str__(self):
        return "System Settings"
